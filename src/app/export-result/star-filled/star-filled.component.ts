import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-star-filled",
  templateUrl: "./star-filled.component.html",
  styleUrls: ["./star-filled.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarFilledComponent {}
