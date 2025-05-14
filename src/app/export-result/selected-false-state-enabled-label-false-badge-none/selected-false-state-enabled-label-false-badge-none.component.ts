import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-selected-false-state-enabled-label-false-badge-none",
  templateUrl:
    "./selected-false-state-enabled-label-false-badge-none.component.html",
  styleUrls: [
    "./selected-false-state-enabled-label-false-badge-none.component.scss",
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedFalseStateEnabledLabelFalseBadgeNoneComponent {
  @Input() labelText: string = "Label";
  @Input() selected: "False" | "True" = "False";
  @Input() state: "Enabled" | "Hovered" | "Focused" | "Pressed" = "Enabled";
  @Input() label: "False" | "True" = "False";
  @Input() badge: "None" | "Small" | "Large" = "None";
}
