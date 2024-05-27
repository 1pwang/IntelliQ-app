<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10 pt-5" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <form @submit.prevent="handleSubmit" class="relative">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center">
                    <span class="bg-white px-3 text-base font-semibold leading-6 text-gray-900">Subject</span>
                  </div>
                </div>
                <label for="subject" class="sr-only">Subject</label>
                <input
                    v-model="formData.subject"
                    type="text"
                    name="subject"
                    id="subject"
                    class="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
                    placeholder="Subject"
                />
                <div class="relative">
                  <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center">
                    <span class="bg-white px-3 text-base font-semibold leading-6 text-gray-900">Module</span>
                  </div>
                </div>
                <label for="module" class="sr-only">Module</label>
                <input
                    v-model="formData.module"
                    type="text"
                    name="module"
                    id="module"
                    class="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
                    placeholder="Module"
                />
                <div class="relative">
                  <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center">
                    <span class="bg-white px-3 text-base font-semibold leading-6 text-gray-900">Topic</span>
                  </div>
                </div>
                <label for="topic" class="sr-only">Topic</label>
                <input
                    v-model="formData.topic"
                    type="text"
                    name="topic"
                    id="topic"
                    class="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
                    placeholder="Topic"
                />
                <div class="relative">
                  <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center">
                    <span class="bg-white px-3 text-base leading-6 text-gray-900">Notes</span>
                  </div>
                </div>
                <label for="notes" class="sr-only">Notes</label>
                <textarea
                    v-model="formData.notes"
                    rows="2"
                    name="notes"
                    id="notes"
                    class="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Notes"
                />

                <div aria-hidden="true">
                  <div class="py-2">
                    <div class="h-9" />
                  </div>
                  <div class="h-px" />
                  <div class="py-2">
                    <div class="py-px">
                      <div class="h-9" />
                    </div>
                  </div>
                </div>

                <div class="absolute inset-x-px bottom-0">
                  <div class="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
                    <div class="flex">
                      <button type="button" class="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400">
                        <PaperClipIcon class="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
                        <span class="text-sm italic text-gray-500 group-hover:text-gray-600">Attach a file</span>
                      </button>
                    </div>
                    <div class="flex-shrink-0">
                      <button type="submit" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2" @click="open = false">Deactivate</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="open = false" ref="cancelButtonRef">Cancel</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PaperClipIcon } from '@heroicons/vue/20/solid'

const formData = ref({
  subject: '',
  module: '',
  topic: '',
  notes: ''
})

const emit = defineEmits(['submitData', 'close']);
const handleSubmit = async () => {
  try {
    emit('submitData', { ...formData.value });

    formData.value = {
      subject: '',
      module: '',
      topic: '',
      notes: ''
    }

    open.value = false
  } catch (error) {
    console.error('Failed to save the form data', error)
  }
}

const open = ref(true)
</script>
