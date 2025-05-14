import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailComponent {}
