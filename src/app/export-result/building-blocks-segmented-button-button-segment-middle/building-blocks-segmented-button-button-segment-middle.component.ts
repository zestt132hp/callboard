import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-building-blocks-segmented-button-button-segment-middle",
  templateUrl:
    "./building-blocks-segmented-button-button-segment-middle.component.html",
  styleUrls: [
    "./building-blocks-segmented-button-button-segment-middle.component.scss",
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingBlocksSegmentedButtonButtonSegmentMiddleComponent {
  @Input() labelText: string = "Label";
  @Input() configuration: "Label only" | "Label & icon" | "Icon only" =
    "Icon only";
  @Input() state: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled" =
    "Disabled";
  @Input() selected: "True" | "False" = "False";
}
