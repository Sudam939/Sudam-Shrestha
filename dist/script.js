// Open the drawer
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('drawer-menu').style.transform = 'translateX(0)';
});

// Close the drawer
document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('drawer-menu').style.transform = 'translateX(-100%)';
});

// Close drawer when a link is clicked
function closeDrawer() {
    document.getElementById('drawer-menu').style.transform = 'translateX(-100%)';
}