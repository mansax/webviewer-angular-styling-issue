import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('viewer') viewer: ElementRef;
  wvInstance: any;
  @Output() coreControlsEvent: EventEmitter<any> = new EventEmitter();

  private documentLoaded$: Subject<void>;

  constructor() {
    this.documentLoaded$ = new Subject<void>();
  }

  ngAfterViewInit(): void {

    WebViewer({
      path: '../lib',
      initialDoc: '../files/webviewer-demo-annotated.pdf',
      disabledElements: [
        'viewControlsOverlay',
        'menuOverlay',
        'zoomOverlay',
        'signatureModal',
        'passwordModal',
        'editTextModal',
        'customStampModal',
        'linkModal',
        'filterModal',
        'signatureValidationModal',
        'signaturePanelButton',
        'annotationRedactButton',
        'textRedactToolButton',
        'textUnderlineToolButton',
        'textStrikeoutToolButton',
        'textSquigglyToolButton',
        'leftPanelTabs',
        'thumbnailsSizeSlider',
        'thumbExtract',
        'annotationContentOverlay',
        'noteState',
        'textHighlightToolButton',
        'styleOption',
        'toolsOverlay',
        'pageManipulationOverlayButton',
        'replacePage',
        'rotatePageCounterClockwise',
        'thumbnailsControlInsertPopupTrigger',
        'thumbnailsControlReplace',
        'thumbnailsControlExtract',
        'thumbnailsControlManipulatePopupTrigger',
        'contextMenuPopup', 'annotationCommentButton', 'linkButton'
      ]
    }, this.viewer.nativeElement).then(instance => {
      this.wvInstance = instance;
    });
  }

  ngOnInit() {
  }

  getDocumentLoadedObservable() {
    return this.documentLoaded$.asObservable();
  }
}
