import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';



@Directive({ selector: '[showAuthed]' })

export class ShowAuthedDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set showAuthed(condition: boolean) {
        let auth: boolean;
        if (localStorage.getItem('currentUser'))
            auth = true;
        else
            auth = false;

        if (condition && auth || !condition && !auth)
            this.viewContainer.createEmbeddedView(this.templateRef);
        else
            this.viewContainer.clear();
    }
}
