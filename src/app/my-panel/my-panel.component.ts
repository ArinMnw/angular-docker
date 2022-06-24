import { ChangeDetectorRef, Component, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AdItem } from '../shared/model/class/ad-item';
import { AdComponent } from '../shared/model/interface/ad';
import { AdDirective } from '../shared/directive/ad.directive';
import { AdService } from '../shared/service/ad.service';
import { Subscription } from 'rxjs';
import { ComponentClass, COMPONENTREGISTRY } from '../shared/model/class/component-registry';

@Component({
  selector: 'app-my-panel',
  templateUrl: './my-panel.component.html',
  styleUrls: ['./my-panel.component.scss']
})
export class MyPanelComponent implements OnInit {
  // @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  @ViewChild('a2', { static: true })
  public adHost!: AdDirective;
  @ViewChildren('a3')
  public a3: QueryList<AdDirective> = new QueryList<AdDirective>();
  adItem: AdItem[] = [];

  selector: string = '<hero-profile></hero-profile>'

  constructor(private adService: AdService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.adItem = this.adService.getAds();
    // this.loadComponent();
  }

  ngAfterViewInit(): void {
    this.loadComponents();
    this.cdRef.detectChanges();
  }


  loadComponent() {
    const adItem = this.adItem[0];
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef: ComponentRef<AdComponent> = viewContainerRef.createComponent<AdComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
    componentRef.instance.onChange();
  }


  loadComponents(componentRegistry?: ReadonlyMap<string, ComponentClass>) {
    this.a3.map((ad: AdDirective, index: number) => {
      console.log(componentRegistry);
      let component = COMPONENTREGISTRY.getTypeFor(this.adItem[index].selector)
      const viewContainerRef = ad.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<AdComponent>(
        component as any
      );
      componentRef.instance.data = this.adItem[index].data;
      componentRef.instance.onChange();
    })
  }

}
