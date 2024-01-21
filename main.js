const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks',
      image: './assets/images/socks_green.jpg',
      inStock: false,
      inventory: 10,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImage(variantImage) {
      this.image = variantImage
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  }
})      
