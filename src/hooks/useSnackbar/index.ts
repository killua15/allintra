// import { addSnackBar, disableSnackBar } from '@src/features/reducers/snackbar'

// import { type UseSnackbar } from './types'

// import { useAppDispatch } from '../useAppDispatch'

// export default function useSnackbar(): UseSnackbar {
//   const dispatch = useAppDispatch()

//   return {
//     openNewSnackbar({ name, message, type, timeOpenedInSeconds = 5 }) {
//       dispatch(
//         addSnackBar({
//           newSnackBar: {
//             isOpen: true,
//             name,
//             message,
//             type
//           }
//         })
//       )

//       setTimeout(() => {
//         dispatch(disableSnackBar({ snackBarName: name }))
//       }, timeOpenedInSeconds * 1000)
//     }
//   }
// }
