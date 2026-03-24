import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.services';

@Component({
  selector: 'app-admin-dashboard-layout.ts',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-dashboard-layout.ts.html',
})
export class AdminDashboardLayoutTs {

  authService = inject(AuthService);

  user = computed(() => this.authService.user());



}
