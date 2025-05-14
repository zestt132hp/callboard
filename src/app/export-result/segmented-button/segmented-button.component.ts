import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-segmented-button",
  templateUrl: "./segmented-button.component.html",
  styleUrls: ["./segmented-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedButtonComponent {
  @Input() segments: "2" | "3" | "4" | "5" = "5";
  @Input() density: "0" | "-1" | "-2" | "-3" = "-3";

  labelText = "Default label 2"
}
