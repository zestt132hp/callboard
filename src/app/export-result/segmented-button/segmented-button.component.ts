import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-segmented-button',
  templateUrl: './segmented-button.component.html',
  styleUrls: ['./segmented-button.component.scss']
})
export class SegmentedButtonComponent {
  isListView = true;
  @Output() viewChanged = new EventEmitter<'list' | 'grid'>();

  toggleView(viewType: 'list' | 'grid') {
    this.isListView = viewType === 'list';
    this.viewChanged.emit(viewType);
  }
}