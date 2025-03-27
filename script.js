//your JS code here. If required.
	const selectElement = document.getElementById('colorSelect');
const removeButton = document.querySelector('input');

removeButton.addEventListener('click',function() {
	
	var selectedIndex = selectElement.selectedIndex;
	if(selectedIndex != -1) {
		selectElement.remove(selectElement.selectedIndex);
	}
});