class Menu
{
  constructor(options)
  {
    this.options = options;
  }

  getElem()
  {
    if (!this.elem) this.render();
    return this.elem;
  }

  render()
  {
    this.elem = document.createElement('div');
    this.elem.className = "menu";

    let titleElem = document.createElement('span');
    this.elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = this.options.title;

    this.elem.onmousedown = () => false;

    this.elem.onclick = event =>
    {
      if (event.target.closest('.title'))
      {
        this.toggle();
      }
    }
  }

  renderItems()
  {
    var items = this.options.items || [];
    var list = document.createElement('ul');
    items.forEach(item => {
      var li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    this.elem.appendChild(list);
  }

  open()
  {
    if (!this.elem.querySelector('ul')) 
    {
      this.renderItems();
    }
    this.elem.classList.add('open');
  }

  close() 
  {
    this.elem.classList.remove('open');
  };

  toggle() 
  {
    if (this.elem.classList.contains('open')) this.close();
    else this.open();
  };
}

// function Menu(options) {
//   var elem;

//   function getElem() {
//     if (!elem) render();
//     return elem;
//   }

//   function render() {
//     elem = document.createElement('div');
//     elem.className = "menu";

//     var titleElem = document.createElement('span');
//     elem.appendChild(titleElem);
//     titleElem.className = "title";
//     titleElem.textContent = options.title;

//     elem.onmousedown = function() {
//       return false;
//     };

//     elem.onclick = function(event) {
//       if (event.target.closest('.title')) {
//         toggle();
//       }
//     }

//   }

//   function renderItems() {
//     var items = options.items || [];
//     var list = document.createElement('ul');
//     items.forEach(function(item) {
//       var li = document.createElement('li');
//       li.textContent = item;
//       list.appendChild(li);
//     });
//     elem.appendChild(list);
//   }

//   function open() {
//     if (!elem.querySelector('ul')) {
//       renderItems();
//     }
//     elem.classList.add('open');
//   };

//   function close() {
//     elem.classList.remove('open');
//   };

//   function toggle() {
//     if (elem.classList.contains('open')) close();
//     else open();
//   };

//   this.getElem = getElem;
//   this.toggle = toggle;
//   this.close = close;
//   this.open = open;
// }