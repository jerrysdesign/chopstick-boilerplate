define(['./modal' ], function (Modal) {

  function ModalBig(options) {

    Modal.call(this, options);

    this.setWidth('90%');

    return this;

  }

  ModalBig.prototype = new Modal();

  ModalBig.prototype.helloWorld = function(){
    console.log("hello world");
  }

  return ModalBig;
});
