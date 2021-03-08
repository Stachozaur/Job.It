import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Input, OnInit, ComponentRef, ComponentFactory, Host } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font-awesome-renderer',
  template: '<ng-container class="dupa" #host></ng-container>',
  host: {'class': 'category-icon'}

})
export class FontAwesomeRendererComponent implements OnInit {
  @Input() icon!: IconDefinition;

  @ViewChild('host', {read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.createIcon();
  }

  private createIcon(): void {
    const factory: ComponentFactory<FaIconComponent> = this.cfr.resolveComponentFactory(FaIconComponent);
    const componentRef: ComponentRef<FaIconComponent> = this.container.createComponent(factory);
    componentRef.instance.icon = this.icon;
    componentRef.instance.render();

  }
}