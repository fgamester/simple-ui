import '../simple-ui/simple-ui.css'

const simpleUI = {
    /**
     * Creates a modal with the following elements: Title, text and close button.
     * @param {Object} options - The options for the modal.
     * @param {string} options.title - The title of the modal.
     * @param {string} options.text - The text of the modal.
     * @param {'center'|'top-left'|'top-center'|'top-right'|'center-left'|'center-right'|'bottom-left'|'bottom-center'|'bottom-right'} options.position - [optional]The position of the modal. Center by default.
     * @param {string} options.buttonText - The text of the button.
     * @param {'default'|'cancel'|'accept'|'CSS color Format'} options.buttonStyle - The style of the button. You can use the basic presets colors or use your own in any CSS color format.
     */
    modal: ({
        title,
        text,
        position = 'center',
        buttonText = 'Close',
        buttonStyle = 'default'
    } = {}) => {

        if (typeof title !== 'string') {
            throw new TypeError("Title must be a string");
        }

        if (typeof text !== 'string') {
            throw new TypeError("Text must be a string");
        }
        //elements creation section
        const modal = document.createElement('div');
        const body = document.createElement('div');
        const h2Comp = document.createElement('h2');
        const h3Comp = document.createElement('h3');
        const closeBtn = document.createElement('button');
        //elements content section
        h2Comp.textContent = title;
        h3Comp.textContent = text;
        closeBtn.textContent = buttonText.trim() != '' ? buttonText : 'Close';
        //structure section
        modal.appendChild(body);
        body.appendChild(h2Comp);
        body.appendChild(h3Comp);
        body.appendChild(closeBtn);
        //class and id assignment
        modal.id = 'sui-modal';
        modal.classList.add(`sui-modal-position-${position}`);
        body.id = 'sui-modal-body';
        closeBtn.id = 'sui-btn-basic';
        addTemporalClass(body, 'sui-anim-pop-up', 800);
        addTemporalClass(modal, 'sui-anim-fade-in', 300);
        //build section
        document.body.appendChild(modal);
        modal.addEventListener('click', closeModal);

        function closeModal(e) {
            if (e.target === modal || e.target === closeBtn) {
                addTemporalClass(body, 'sui-anim-implode-out', 300);
                addTemporalClass(modal, 'sui-anim-fade-out', 300);
                setTimeout(() => modal.remove(), 275);
            }
        }

        function addTemporalClass(element, className, timer) {
            element.classList.add(className);
            setTimeout(() => element.classList.remove(className), timer);
        }

    }
};

export default simpleUI;