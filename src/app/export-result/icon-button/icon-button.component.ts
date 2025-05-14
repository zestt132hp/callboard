import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input() style: "Filled" | "Outlined" | "Standard" | "Tonal" = "Outlined";
  @Input() state: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled" =
    "Disabled";
}
