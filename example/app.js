import TiBottomSheet from 'ti.bottomsheet';

const options = TiBottomSheet.createOptionDialog({
    title: 'Titanium rocks!',
    options: [ 'Option A', 'Option B' ],
    cancelable: true
});

options.addEventListener('click', event => {
    alert(event);
});

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var btn = Ti.UI.createButton({
    title: 'Show options'
});

btn.addEventListener('click', event => {
    options.show();
});

win.add(btn);
win.open();