import '../simple-ui/simple-ui.css'

const simpleUI = {
    modal: () => {
        const modal = document.createElement('div');
        const body = document.createElement('div');
        const h1Comp = document.createElement('div');
        const h3Comp = document.createElement('div');
        const closeBtn = document.createElement('button');

        closeBtn.textContent = 'Close'

        modal.appendChild(body);
        body.appendChild(h1Comp);
        body.appendChild(h3Comp);
        body.appendChild(closeBtn);

        modal.id = 'simple-modal';
        document.body.appendChild(modal);
        closeBtn.addEventListener('click', () => document.body.removeChild(modal));
    }
};

export default simpleUI;