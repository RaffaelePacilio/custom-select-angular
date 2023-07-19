import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-custom-select',
  templateUrl: './my-custom-select.component.html',
  styleUrls: ['./my-custom-select.component.scss']
})
export class MyCustomSelectComponent {
  options: any[] = [
    { text: 'Abruzzo', link: '#' },
    { text: 'Basilicata', link: '#' },
    { text: 'Calabria', link: '#' },
    { text: 'Campania', link: '#' },
    { text: 'Emilia Romagna', link: '#' },
    { text: 'Friuli Venezia Giulia', link: '#' },
    { text: 'Lazio', link: '#' },
    { text: 'Liguria', link: '#' },
    { text: 'Lombardia', link: '#' },
    { text: 'Marche', link: '#' },
    { text: 'Molise', link: '#' },
    { text: 'Piemonte', link: '#' },
    { text: 'Puglia', link: '#' },
    { text: 'Sardegna', link: '#' },
    { text: 'Sicilia', link: '#' },
    { text: 'Toscana', link: '#' },
    { text: 'Trentino Alto Adige', link: '#' },
    { text: 'Umbria', link: '#' },
    { text: 'Valle d’Aosta', link: '#' },
    { text: 'Veneto', link: '#' },
  ];

  filteredOptions: any[] = [];
  searchControl = new FormControl('');
  isDropdownOpen = false;
  selectedOption: any;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.options;
    this.searchControl.valueChanges.subscribe((value) => {
      this.filterOptions(value as any);
    });
  }

  filterOptions(value: string) {
    this.filteredOptions = this.options.filter((option) =>
      option.text.toLowerCase().includes(value.toLowerCase())
    );
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (!this.isDropdownOpen) {
      this.filterOptions('');
    }
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.searchControl.setValue(option.text);
    this.toggleDropdown();
  }

  clearSelection() {
    this.selectedOption = null;
    this.searchControl.setValue('');
    this.filterOptions('');
  }
}
