document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordcount');
    const sentenceCount = document.getElementById('sentenceCount');

    textInput.addEventListener('input', () => {
        const text = textInput.value.trim();
        //word count
        const words = text.split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = `Words: ${words.length}`;
        //sentence count
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        sentenceCount.textContent = `Sentences: ${sentences.length}`;
    });
});
