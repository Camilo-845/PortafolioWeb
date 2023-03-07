import toast, { Toaster } from 'react-hot-toast';

export const notification =function(){
}
notification.prototype.success = function(message) {
    toast.success(message)
}