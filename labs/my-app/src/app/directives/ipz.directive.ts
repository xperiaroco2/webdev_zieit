import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
@Directive({
  selector: '[appIpz]'
})
export class IpzDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
  }
  // @ts-ignore
  @Input('appIpz') color: string;
  // @ts-ignore
  @Input() dStyle: {marginTop?: string}
  // @ts-ignore
  @Input() title: string;
  @HostListener('mouseenter', ['$event.target']) onMouseEnter() {
    this.r.setStyle(this.el.nativeElement,'color', this.color)
    this.r.setStyle(this.el.nativeElement,'margin-top',this.dStyle.marginTop)
    this.r.setStyle(this.el.nativeElement,'font-weight','bold')
    this.r.setStyle(this.el.nativeElement,'font-size','19px')
    this.r.setStyle(this.el.nativeElement,'background-color','azure')
  }
  @HostListener('mouseleave', ['$event.target']) onMouseLive() {
    this.r.setStyle(this.el.nativeElement,'color',null)
    this.r.setStyle(this.el.nativeElement,'margin-top',null)
    this.r.setStyle(this.el.nativeElement,'font-weight',null)
    this.r.setStyle(this.el.nativeElement,'font-size',null)
    this.r.setStyle(this.el.nativeElement,'background-color',null)
  }
  @HostListener('click', ['$event.target']) onClick() {
    alert(this.title);
  }
}
