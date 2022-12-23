AFRAME.registerComponent('car', {
    schema: {
      modelref: {type: 'string', default:'scene.gltf'}
    },
    init: function () {
        console.log('Car component');
        this.el.setAttribute("gltf-model",this.data.modelref)
        const pos = {x:0, y:5, z:100}
        const rotation = {x:0, y:50, z:0}
        const scale = {x:2, y:2, z:2}
        this.el.setAttribute("position",pos)
        this.el.setAttribute("rotation",rotation)
        this.el.setAttribute("scale",scale)
      }
  })