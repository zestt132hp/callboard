import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-style-elevated-configuration-label-brand-icon-state-disabled",
  templateUrl:
    "./style-elevated-configuration-label-brand-icon-state-disabled.component.html",
  styleUrls: [
    "./style-elevated-configuration-label-brand-icon-state-disabled.component.scss",
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StyleElevatedConfigurationLabelBrandIconStateDisabledComponent {
  @Input() labelText: string = "Label";
  @Input() style: "Outlined" | "Elevated" = "Elevated";
  @Input() configuration:
    | "Label only"
    | "Label & icon"
    | "Label & favicon"
    | "Label & brand icon" = "Label & brand icon";
  @Input() state:
    | "Enabled"
    | "Hovered"
    | "Focused"
    | "Pressed"
    | "Dragged"
    | "Disabled" = "Disabled";
}
