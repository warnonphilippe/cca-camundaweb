import { NgModule } from '@angular/core';

import { CamundawebSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CamundawebSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CamundawebSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CamundawebSharedCommonModule {}
