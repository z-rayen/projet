import angry from './emojis/angry.png';
import like from './emojis/like.png';
import care from './emojis/care.png';
import haha from './emojis/haha.png';
import love from './emojis/love.png';
import sad from './emojis/sad.png';
import wow from './emojis/wow.png';
function DesEmo({ emo_type }) {

    const typ={
        "j’aime": like, 
        "like": like,
        "j’adore": love ,
        "love": love ,
        "solidare": care,
        "care": care,
        'haha': haha ,
        'wow': wow ,
        'wouah': wow ,
        'sad': sad ,
        'triste': sad ,
        'angry': angry,
        'en colère': angry }
    return(
        
            <div>
              <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src={typ[ emo_type] } alt='' />
              <p class="text-sm font-normal text-gray-600 dark:text-gray-400">{ emo_type }</p>
            </div>
      
    )}
    export default DesEmo;