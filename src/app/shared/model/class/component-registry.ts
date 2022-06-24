
import { BehaviorSubject } from "rxjs";

interface Component { }

export type ComponentClass = { new(...any: any[]): Component };

export class ComponentRegistry {

  private _registry = new Map<string, ComponentClass>();
  get registry(): ReadonlyMap<string, ComponentClass> {
    return this._registry;
  }

  private componentRegistry = new BehaviorSubject<ReadonlyMap<string, ComponentClass>>(this.registry);
  currentComponentRegistry = this.componentRegistry.asObservable();


  getTypeFor(name: string): ComponentClass {
    // if (name.match('-'))
    //   name = this.getComponentNameFromTemplate(name);
    let componentClass: ComponentClass | undefined = this._registry.get(name);
    if (componentClass == null) throw new Error(`${name} was not found in the COMPONENTREGISTRY.registry`);
    return componentClass;
  }

  getComponentNameFromTemplate(name: string): string {
    const words: string[] = name.split('-');
    words.splice(0, 1); // remove the prefix
    for (let i = 0; i < words.length; i++) {
      const capitalized = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      words.splice(i, 1, capitalized);
    }
    const componentName = words.join('') + 'Component';
    return componentName;
  }

  register(cls: ComponentClass, selector: string): void {
    this._registry.set(selector, cls);
    this.componentRegistry.next(this.registry);
  }

  // registerTemplateString(cls: ComponentClass): void {
  // 	let templateString = 'app-angular-component'; // how to get this from the ComponentClass reference?
  // 	this.registry.set(templateString, cls);
  // }

}

export const COMPONENTREGISTRY = new ComponentRegistry();

export function registerComponent(componentClass: ComponentClass, selector: string): void {
  COMPONENTREGISTRY.register(componentClass, selector);
}
