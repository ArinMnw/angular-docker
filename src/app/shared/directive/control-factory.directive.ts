// import {
//   Directive,
//   Component,
//   ComponentFactory,
//   OnChanges,
//   Input,
//   ViewContainerRef,
//   Compiler,
//   ComponentFactoryResolver
//  } from '@angular/core';

// import { CommonModule } from '@angular/common';


// @Directive({
//   selector: '[ctrl-factory]'
// })
// export class ControlFactoryDirective implements OnChanges {
//   @Input() comp: string;
//   componentRef;
//   init = false;

//   constructor(
//     private vcRef: ViewContainerRef,
//     private resolver: ComponentFactoryResolver) { }

//   ngOnChanges() {
//     if (!this.comp || this.init) return;

//     var factories = Array.from(this.resolver['_factories'].keys());
//     var factoryClass = factories.find((x: any) => x.name === this.comp);
//     const factory = this.resolver.resolveComponentFactory(factoryClass);
//     const compRef = this.vcRef.createComponent(factory);



//     if (this.componentRef) {
//       this.componentRef.destroy();
//     }

//     this.componentRef = compRef;
//     this.init = true;
//   }

//   public ngOnDestroy(){
//     if (this.componentRef) {
//         this.componentRef.destroy();
//         this.componentRef = null;
//     }
//   }
// }

