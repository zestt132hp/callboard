import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-building-blocks-segmented-button-button-segment-start",
  templateUrl:
    "./building-blocks-segmented-button-button-segment-start.component.html",
  styleUrls: [
    "./building-blocks-segmented-button-button-segment-start.component.scss",
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingBlocksSegmentedButtonButtonSegmentStartComponent {
  @Input() labelText: string = "Label";
  @Input() configuration: "Label only" | "Label & icon" | "Icon only" =
    "Icon only";
  @Input() state: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled" =
    "Disabled";
  @Input() selected: "True" | "False" = "False";
}
