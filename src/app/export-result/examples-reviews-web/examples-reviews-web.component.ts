import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-examples-reviews-web",
  templateUrl: "./examples-reviews-web.component.html",
  styleUrls: ["./examples-reviews-web.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesReviewsWebComponent {

  ExamplesReviewsWebComponent() {
    this.setInfiniteScroll();
  }

  private setInfiniteScroll() {
    const list = document.querySelector('.list_1001-2683');
    if (list) {
      list.addEventListener('scroll', () => {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
          list.scrollTop = 0;
        }
      });
    }
  }
}
