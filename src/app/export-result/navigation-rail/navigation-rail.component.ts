import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-navigation-rail",
  templateUrl: "./navigation-rail.component.html",
  styleUrls: ["./navigation-rail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationRailComponent {
  @Input() fab: boolean = false;
  @Input() alignment: "Top" | "Middle" | "Bottom" = "Top";
  labelText = "Default label"
}
