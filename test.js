//faizahmadym_2200016061_D

import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from './math.js';

describe('Pengujian Fungsi Matematika', function() {
  it('seharusnya mengembalikan 10 saat menambahkan 5 + 5', function() {
    expect(tambah(5, 5)).to.equal(10);
  });
  it('seharusnya mengembalikan 9 saat mengalikan 3 * 3', function() {
    expect(kali(3, 3)).to.equal(9);
  });
  it('seharusnya mengembalikan 2 saat mengurangkan 4 - 2', function() {
    expect(kurang(4, 2)).to.equal(2);
  });
  it('seharusnya mengembalikan 8 saat membagi 8 / 2', function() {
    expect(bagi(8, 2)).to.equal(4);
  });
  it('seharusnya mengembalikan error saat membagi dengan 0', function() {
    expect(() => bagi(9, 0)).to.throw('Tidak bisa membagi dengan nol');
  }); //Latihan 1
  it('seharusnya mengembalikan -8 saat mengurangkan -4 - 4', function() {
    expect(kurang(-4, 4)).to.equal(-8);
  }); //Latihan 1
  it('seharusnya mengembalikan error saat menambahkan string dan angka', function() {
    expect(() => tambah('5', 7)).to.throw('Input harus berupa angka');
  }); //Latihan 2
  it('seharusnya mengembalikan error saat mengalikan string dan angka', function() {
    expect(() => kali('3', 4)).to.throw('Input harus berupa angka');
  }); //Latihan 2
  it('seharusnya mengembalikan error saat menambahkan null dan angka', function() {
    expect(() => tambah(null, 9)).to.throw('Input tidak boleh null');
  }); //Latihan 2
  it('seharusnya mengembalikan error saat mengalikan null dan angka', function() {
    expect(() => kali(null, 7)).to.throw('Input tidak boleh null'); 
  }); //Latihan 2

});