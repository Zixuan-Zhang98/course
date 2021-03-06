Confirm = {
    show: function (message, callback) {
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                if (callback) {
                    callback();
                }
            }
        })
    }
}