import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ChangeDetectionStrategy 
} from '@angular/core';

// Объявляем интерфейс перед классом
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}

@Component({
  selector: "app-navigation-rail",
  templateUrl: "./navigation-rail.component.html",
  styleUrls: ["./navigation-rail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationRailComponent {
  @Input() fab: boolean = false;
  @Input() isVisible = true;
  @Input() alignment: 'Top' | 'Middle' | 'Bottom' = 'Top';
  @Output() navItemClicked = new EventEmitter<string>();
  @Output() visibilityChanged = new EventEmitter<boolean>();

  navItems: NavigationItem[] = [
    { id: 'chair', label: 'Мебель', icon: 'chair', active: true },
    { id: 'cars', label: 'Авто', icon: 'directions_car', active: false },
    { id: 'car_repair', label: 'Запчасти', icon: 'car_repair', active: false },
    { id: 'clothes', label: 'Одежда', icon: 'checkroom', active: false }
  ];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.visibilityChanged.emit(this.isVisible);
  }

  handleItemClick(clickedItem: NavigationItem): void {
    this.navItems.forEach(item => item.active = item.id === clickedItem.id);
    this.navItemClicked.emit(clickedItem.id);
  }
}