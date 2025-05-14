import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-fab",
  templateUrl: "./fab.component.html",
  styleUrls: ["./fab.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabComponent {
  @Input() style: "Surface" | "Primary" | "Secondary" | "Tertiary" = "Tertiary";
  @Input() state: "Enabled" | "Hovered" | "Focused" | "Pressed" = "Pressed";
}
