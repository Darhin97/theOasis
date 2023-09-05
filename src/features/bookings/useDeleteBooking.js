import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deletBookingApi } from "../../services/apiBookings";

const useDeleteBooking = () => {
  const queryClient = useQueryClient();

  //delete cabin
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deletBookingApi(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isDeleting,
    deleteBooking,
  };
};

export default useDeleteBooking;
