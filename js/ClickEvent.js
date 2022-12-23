AFRAME.registerComponent('rotate-car', {
    schema: {
      clickCounter: {type: 'number', default: 0}
    },
    update:function() {
        window.addEventListener("click",e=>{
            this.data.clickCounter = this.data.clickCounter + 1
            if(this.data.clickCounter === 1){
                const rotate = {x:0, y:-90, z:0};
                this.el.setAttribute("rotation",rotate)
            }
            else if(this.data.clickCounter === 2){
                const rotate = {x:0, y:-180, z:0};
                this.el.setAttribute("rotation",rotate)
            }
            else if(this.data.clickCounter === 3){
                const rotate = {x:0, y:-270, z:0}
                this.el.setAttribute("rotation",rotate)
            }
            else if(this.data.clickCounter === 4){
                const rotate = {x:0, y:-360, z:0}
                this.el.setAttribute("rotation",rotate)
            }
        })
     }
  });