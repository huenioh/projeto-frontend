import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBookListStyle]' // O seletor que será usado nos componentes
})
export class BookListStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Estilos iniciais para o item da lista
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'align-items', 'flex-start');
    this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', '15px');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #ddd');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'background', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 1.5s ease');
  }

  // Adicionando efeito de hover
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(0.95)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0px 6px 12px rgba(0, 0, 0, 0.15)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}