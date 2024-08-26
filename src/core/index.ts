import 'reflect-metadata';
import { NODE_ENV } from './config/env';
import { Coffee } from './modules/buyCoffee/Coffee';
import { ExtraSugar } from './modules/buyCoffee/decorators/ExtraSugar.Decorators';
import { ExtraCream } from './modules/buyCoffee/decorators/ExtraCream.Decorator';
console.log(`Node Env : ${NODE_ENV}`);
console.log(`Directory : ${__dirname}`);

let coffee=new Coffee();
console.log(`Cost:${coffee.cost()} description:${coffee.description()}`);

coffee=new ExtraSugar(coffee);
console.log(`Cost:${coffee.cost()} description:${coffee.description()}`);

coffee=new ExtraCream(coffee);
console.log(`Cost:${coffee.cost()} description:${coffee.description()}`);