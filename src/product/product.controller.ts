import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  products = [
    {
      id: 1,
      name: 'iPhone 14',
      price: '30k',
    },
    {
      id: 2,
      name: 'Apple Watch',
      price: '13k',
    },
    {
      id: 3,
      name: 'Macbook Pro',
      price: '76k',
    },
  ];

  @Get()
  async getProducts() {
    return this.products;
  }

  @Get('/:id')
  async getProductById(@Param('id') id: number) {
    const res = this.products.find((product) => {
      return product.id === +id;
    });
    return res;
  }

  @Post()
  async addProduct(@Body('name') name: string, @Body('price') price: string) {
    const product = {
      id: this.products.length + 1,
      name,
      price,
    };

    try {
      this.products.push(product);
      return 'add success';
    } catch (error) {
      throw new error();
    }
  }
}
