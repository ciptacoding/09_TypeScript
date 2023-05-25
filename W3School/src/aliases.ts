// Make an alias,
type StudentName = string;
type StudentNim = number;
type StudentMajor = string;
type Student = {
  name: StudentName,
  nim: StudentNim,
  major: StudentMajor,
}

// use alias in new variable
const namaMahasiswa: StudentName = "Risky";
const nimMahasiswa: StudentNim = 200030292;
const prodiMahasiswa: StudentMajor = "Sistem Informasi";
const mahasiswa: Student = {
  name: namaMahasiswa,
  nim: nimMahasiswa,
  major: prodiMahasiswa,
}