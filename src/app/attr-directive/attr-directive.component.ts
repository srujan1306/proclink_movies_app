import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attr-directive',
  standalone: true,
  imports: [NgStyle, NgClass, FormsModule],
  templateUrl: './attr-directive.component.html',
  styleUrl: './attr-directive.component.scss',
})
export class AttrDirectiveComponent {
  fStyle = 'italic';
  fWeight = 'normal';
  fSize = 32;
  isHighlight = false;

  updateWeight() {
    this.fWeight = 'bold';
  }
  addHighlight() {
    this.isHighlight = !this.isHighlight;
  }
}
