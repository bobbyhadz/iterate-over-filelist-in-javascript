console.log('bobbyhadz.com');

const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', event => {
  const files = fileInput.files;
  console.log(files);

  for (let index = 0; index < files.length; index++) {
    console.log(files[index]);

    console.log('name: ', files[index].name);
    console.log('size: ', files[index].size);
    console.log('type: ', files[index].type);

    console.log('-'.repeat(100));
  }
});
