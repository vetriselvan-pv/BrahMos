export default function useFormControl() {
    function takeRef(ref: any) {
        console.log(ref);
    }

    return { takeRef };
}
