const roomDetailsModal = document.getElementById('roomDetailsModal');
  const roomIdElement = document.getElementById('room-id');
  const residentNameElement = document.getElementById('resident-name');
  const genderElement = document.getElementById('gender');
  const originElement = document.getElementById('origin');

  roomDetailsModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    const roomId = button.getAttribute('data-bs-room-id');
    const residentName = button.getAttribute('data-bs-resident-name');
    const gender = button.getAttribute('data-bs-gender');
    const origin = button.getAttribute('data-bs-origin');

    roomIdElement.textContent = roomId;
    residentNameElement.textContent = residentName;
    genderElement.textContent = gender;
    originElement.textContent = origin;
  });

  