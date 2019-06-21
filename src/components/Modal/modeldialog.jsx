import React from 'react';

let singletonDialog = null;

class ModelDialog extends React.Component {
  constructor() {
    super();
    this.dialogs = [];
  }

  componentWillMount() {
    singletonDialog = this;
  }

  componentWillUnmount() {
    singletonDialog = null;
  }

  closeDialogByName(dialogName) {
    this.dialogs = this.dialogs.filter(
      ({ dialog }) => dialog.name !== dialogName
    );
    this.forceUpdate();
  }

  closeAllDialog() {
    this.dialogs = [];
    this.forceUpdate();
  }

  showDialog(dialog) {
    const hasDialog = this.dialogs.find(
      ({ dialog: { name } }) => dialog.name === name
    );
    if (hasDialog) {
      console.warn(`The dialog ${dialog.name} has existed`); //eslint-disable-line
    } else {
      this.dialogs = [...this.dialogs, { dialog, show: true }];
      this.forceUpdate();
    }
  }

  renderDialog() {
    return this.dialogs.map(item => {
      const { dialog } = item;
      if (dialog != null) {
        return React.createElement(dialog.component, {
          ...dialog,
          key: dialog.name,
          closeDialog: () => {
            this.closeDialogByName(dialog.name);
          },
          show: item.show
        });
      }
      return null;
    });
  }

  render() {
    return <>{this.renderDialog()}</>;
  }
}

const showDialog = dialog => {
  if (singletonDialog == null) {
    // eslint-disable-next-line
    console.log('no instance, you need to add ModelDialog');
    return;
  }
  singletonDialog.showDialog(dialog);
};

const closeDialogByName = dialogName => {
  if (singletonDialog == null) {
    // eslint-disable-next-line
    console.log('no instance, you need to add ModelDialog');
    return;
  }
  singletonDialog.closeDialogByName(dialogName);
};

export { showDialog, closeDialogByName, ModelDialog };
