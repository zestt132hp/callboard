import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ExamplesReviewsWebComponent } from "./export-result/examples-reviews-web/examples-reviews-web.component";
import { NavigationRailComponent } from "./export-result/navigation-rail/navigation-rail.component";
import { TopAppBarComponent } from "./export-result/top-app-bar/top-app-bar.component";
import { StyleElevatedConfigurationLabelBrandIconStateDisabledComponent } from "./export-result/style-elevated-configuration-label-brand-icon-state-disabled/style-elevated-configuration-label-brand-icon-state-disabled.component";
import { SegmentedButtonComponent } from "./export-result/segmented-button/segmented-button.component";
import { StarFilledComponent } from "./export-result/star-filled/star-filled.component";
import { FavoriteComponent } from "./export-result/favorite/favorite.component";
import { HorizontalMiddleInsetComponent } from "./export-result/horizontal-middle-inset/horizontal-middle-inset.component";
import { IconButtonComponent } from "./export-result/icon-button/icon-button.component";
import { FabComponent } from "./export-result/fab/fab.component";
import { SelectedFalseStateEnabledLabelFalseBadgeNoneComponent } from "./export-result/selected-false-state-enabled-label-false-badge-none/selected-false-state-enabled-label-false-badge-none.component";
import { TodayComponent } from "./export-result/today/today.component";
import { BuildingBlocksColourfulLogoComponent } from "./export-result/building-blocks-colourful-logo/building-blocks-colourful-logo.component";
import { DirectionsWalkComponent } from "./export-result/directions-walk/directions-walk.component";
import { BuildingBlocksSegmentedButtonButtonSegmentStartComponent } from "./export-result/building-blocks-segmented-button-button-segment-start/building-blocks-segmented-button-button-segment-start.component";
import { BuildingBlocksSegmentedButtonButtonSegmentMiddleComponent } from "./export-result/building-blocks-segmented-button-button-segment-middle/building-blocks-segmented-button-button-segment-middle.component";
import { BuildingBlocksSegmentedButtonButtonSegmentEndComponent } from "./export-result/building-blocks-segmented-button-button-segment-end/building-blocks-segmented-button-button-segment-end.component";
import { MenuComponent } from "./export-result/menu/menu.component";
import { SettingsComponent } from "./export-result/settings/settings.component";
import { EditComponent } from "./export-result/edit/edit.component";
import { MailComponent } from "./export-result/mail/mail.component";
import { StarsComponent } from "./export-result/stars/stars.component";
import { ChatBubbleComponent } from "./export-result/chat-bubble/chat-bubble.component";
import { GmailGroupsComponent } from "./export-result/gmail-groups/gmail-groups.component";
import { VideocamComponent } from "./export-result/videocam/videocam.component";
import { AccountCircleComponent } from "./export-result/account-circle/account-circle.component";
import { ArrowBackComponent } from "./export-result/arrow-back/arrow-back.component";
import { AttachFileComponent } from "./export-result/attach-file/attach-file.component";
import { MoreVertComponent } from "./export-result/more-vert/more-vert.component";
import { CheckComponent } from "./export-result/check/check.component";
@NgModule({
  declarations: [
    AppComponent,
    ExamplesReviewsWebComponent,
    NavigationRailComponent,
    TopAppBarComponent,
    StyleElevatedConfigurationLabelBrandIconStateDisabledComponent,
    SegmentedButtonComponent,
    StarFilledComponent,
    FavoriteComponent,
    HorizontalMiddleInsetComponent,
    IconButtonComponent,
    FabComponent,
    SelectedFalseStateEnabledLabelFalseBadgeNoneComponent,
    TodayComponent,
    BuildingBlocksColourfulLogoComponent,
    DirectionsWalkComponent,
    BuildingBlocksSegmentedButtonButtonSegmentStartComponent,
    BuildingBlocksSegmentedButtonButtonSegmentMiddleComponent,
    BuildingBlocksSegmentedButtonButtonSegmentEndComponent,
    MenuComponent,
    SettingsComponent,
    EditComponent,
    MailComponent,
    StarsComponent,
    ChatBubbleComponent,
    GmailGroupsComponent,
    VideocamComponent,
    AccountCircleComponent,
    ArrowBackComponent,
    AttachFileComponent,
    MoreVertComponent,
    CheckComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
