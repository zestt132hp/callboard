import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-videocam",
  templateUrl: "./videocam.component.html",
  styleUrls: ["./videocam.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideocamComponent {}
