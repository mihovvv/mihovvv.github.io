function handlePageChange() {
  const selectElement = document.getElementById('pages');
  const selectedPage = selectElement.value;
  console.log(selectedPage)
  window.location.replace(selectedPage);
}
