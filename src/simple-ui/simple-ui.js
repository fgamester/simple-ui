import '../simple-ui/simple-ui.css'

const simpleUI = {
    /**
     * Creates a modal with the following elements: Title, text and close button.
     * @param {Object} options - The options for the modal.
     * @param {string} options.title - The title of the modal.
     * @param {string} options.text - The text of the modal.
     * @param {'center'|'top-left'|'top-center'|'top-right'|'center-left'|'center-right'|'bottom-left'|'bottom-center'|'bottom-right'} [options.position="center"] - The position of the modal.
     */
    modal: ({
        title,
        text,
        position = 'center',
    } = {}) => {

        if (typeof title !== 'string') {
            throw new TypeError("Title must be a string");
        }

        if (typeof text !== 'string') {
            throw new TypeError("Text must be a string");
        }

        const modal = document.createElement('div');
        const body = document.createElement('div');
        const h2Comp = document.createElement('h2');
        const h3Comp = document.createElement('h3');
        const closeBtn = document.createElement('button');

        h2Comp.textContent = title;
        h3Comp.textContent = text;
        closeBtn.textContent = 'Close';

        modal.appendChild(body);
        body.appendChild(h2Comp);
        body.appendChild(h3Comp);
        body.appendChild(closeBtn);

        modal.id = 'simple-modal';
        modal.classList.add(`sui-modal-position-${position}`);
        closeBtn.id = 'sui-btn-basic';

        document.body.appendChild(modal);
        closeBtn.addEventListener('click', () => document.body.removeChild(modal));
    }
};

export default simpleUI;